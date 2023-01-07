/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class InsightsService {
  /**
   * Get summary metrics and trends for a project across it's workflows and branches
   * Get summary metrics and trends for a project at workflow and branch level.
   * Workflow runs going back at most 90 days are included in the aggregation window.
   * Trends are only supported upto last 30 days.
   * Metrics are refreshed daily, and thus may not include executions from the last 24 hours.
   * Please note that Insights is not a real time financial reporting tool and should not be used for credit reporting.
   * The most up to date credit information can be found in Plan Overview in the CircleCI UI.
   * @param projectSlug Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
   * @param reportingWindow The time window used to calculate summary metrics.
   * @param branches The names of VCS branches to include in branch-level workflow metrics.
   * @param workflowNames The names of workflows to include in workflow-level metrics.
   * @returns any Aggregated summary metrics and trends by workflow and branches
   * @throws ApiError
   */
  public static getProjectWorkflowsPageData(
    projectSlug: string,
    reportingWindow?: "last-7-days" | "last-90-days" | "last-24-hours" | "last-30-days" | "last-60-days",
    branches?: any,
    workflowNames?: any
  ): CancelablePromise<{
    /**
     * The unique ID of the organization
     */
    org_id?: any;
    /**
     * The unique ID of the project
     */
    project_id?: any;
    /**
     * Metrics and trends data aggregated for a given project.
     */
    project_data?: {
      /**
       * Metrics aggregated across all workflows and branches for a project.
       */
      metrics: {
        /**
         * The total number of runs.
         */
        total_runs: number;
        /**
         * Total duration, in seconds.
         */
        total_duration_secs: number;
        /**
         * The total credits consumed over the current timeseries interval.
         */
        total_credits_used: number;
        success_rate: number;
        /**
         * The average number of runs per day.
         */
        throughput: number;
      };
      /**
       * Metric trends aggregated across all workflows and branches for a project.
       */
      trends: {
        /**
         * The trend value for total number of runs.
         */
        total_runs: number;
        /**
         * Trend value for total duration.
         */
        total_duration_secs: number;
        /**
         * The trend value for total credits consumed.
         */
        total_credits_used: number;
        /**
         * The trend value for the success rate.
         */
        success_rate: number;
        /**
         * Trend value for the average number of runs per day.
         */
        throughput: number;
      };
    };
    /**
     * A list of metrics and trends data for workflows for a given project.
     */
    project_workflow_data?: Array<{
      /**
       * The name of the workflow.
       */
      workflow_name: string;
      /**
       * Metrics aggregated across a workflow or branchfor a project.
       */
      metrics: {
        /**
         * The total credits consumed over the current timeseries interval.
         */
        total_credits_used: number;
        /**
         * The 95th percentile duration among a group of workflow runs.
         */
        p95_duration_secs: number;
        /**
         * The total number of runs.
         */
        total_runs: number;
        success_rate: number;
      };
      /**
       * Trends aggregated across a workflow or branch for a project.
       */
      trends: {
        /**
         * The trend value for total credits consumed.
         */
        total_credits_used: number;
        /**
         * The 95th percentile duration among a group of workflow runs.
         */
        p95_duration_secs: number;
        /**
         * The trend value for total number of runs.
         */
        total_runs: number;
        /**
         * The trend value for the success rate.
         */
        success_rate: number;
      };
    }>;
    /**
     * A list of metrics and trends data for branches for a given project.
     */
    project_workflow_branch_data?: Array<{
      /**
       * The name of the workflow.
       */
      workflow_name: string;
      /**
       * The VCS branch of a workflow's trigger.
       */
      branch: string;
      /**
       * Metrics aggregated across a workflow or branchfor a project.
       */
      metrics: {
        /**
         * The total credits consumed over the current timeseries interval.
         */
        total_credits_used: number;
        /**
         * The 95th percentile duration among a group of workflow runs.
         */
        p95_duration_secs: number;
        /**
         * The total number of runs.
         */
        total_runs: number;
        success_rate: number;
      };
      /**
       * Trends aggregated across a workflow or branch for a project.
       */
      trends: {
        /**
         * The trend value for total credits consumed.
         */
        total_credits_used: number;
        /**
         * The 95th percentile duration among a group of workflow runs.
         */
        p95_duration_secs: number;
        /**
         * The trend value for total number of runs.
         */
        total_runs: number;
        /**
         * The trend value for the success rate.
         */
        success_rate: number;
      };
    }>;
    /**
     * A list of all the branches for a given project.
     */
    all_branches?: Array<string>;
    /**
     * A list of all the workflows for a given project.
     */
    all_workflows?: Array<string>;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/insights/pages/{project-slug}/summary",
      path: {
        "project-slug": projectSlug,
      },
      query: {
        "reporting-window": reportingWindow,
        branches: branches,
        "workflow-names": workflowNames,
      },
    });
  }

  /**
   * Job timeseries data
   * Get timeseries data for all jobs within a workflow.
   * @param projectSlug Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
   * @param workflowName The name of the workflow.
   * @param branch The name of a vcs branch. If not passed we will scope the API call to the default branch.
   * @param granularity The granularity for which to query timeseries data.
   * @param startDate Include only executions that started at or after this date. This must be specified if an end-date is provided.
   * @param endDate Include only executions that started before this date. This date can be at most 90 days after the start-date.
   * @returns any An array of timeseries data, one entry per job.
   * @throws ApiError
   */
  public static getJobTimeseries(
    projectSlug: string,
    workflowName: string,
    branch?: string,
    granularity?: "daily" | "hourly",
    startDate?: string,
    endDate?: string
  ): CancelablePromise<{
    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     */
    next_page_token: string;
    /**
     * Aggregate metrics for a workflow at a time granularity
     */
    items: Array<{
      /**
       * The name of the workflow.
       */
      name: string;
      /**
       * The start time for the earliest execution included in the metrics.
       */
      min_started_at: string;
      /**
       * The end time of the last execution included in the metrics.
       */
      max_ended_at: string;
      /**
       * The start of the interval for timeseries metrics.
       */
      timestamp: string;
      /**
       * Metrics relating to a workflow's runs.
       */
      metrics: {
        /**
         * The total number of runs.
         */
        total_runs: number;
        /**
         * The number of failed runs.
         */
        failed_runs: number;
        /**
         * The number of successful runs.
         */
        successful_runs: number;
        /**
         * The average number of runs per day.
         */
        throughput: number;
        /**
         * The median credits consumed over the current timeseries interval.
         */
        median_credits_used: number;
        /**
         * The total credits consumed over the current timeseries interval.
         */
        total_credits_used: number;
        /**
         * Metrics relating to the duration of runs for a workflow.
         */
        duration_metrics: {
          /**
           * The minimum duration, in seconds, among a group of runs.
           */
          min: number;
          /**
           * The median duration, in seconds, among a group of runs.
           */
          median: number;
          /**
           * The max duration, in seconds, among a group of runs.
           */
          max: number;
          /**
           * The 95th percentile duration, in seconds, among a group of runs.
           */
          p95: number;
          /**
           * The total duration, in seconds, added across a group of runs.
           */
          total: number;
        };
      };
    }>;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/insights/time-series/{project-slug}/workflows/{workflow-name}/jobs",
      path: {
        "project-slug": projectSlug,
        "workflow-name": workflowName,
      },
      query: {
        branch: branch,
        granularity: granularity,
        "start-date": startDate,
        "end-date": endDate,
      },
    });
  }

  /**
   * Get summary metrics with trends for the entire org, and for each project.
   * Gets aggregated summary metrics with trends for the entire org.
   * Also gets aggregated metrics and trends for each project belonging to the org.
   * @param orgSlug Org slug in the form `vcs-slug/org-name`. The `/` characters may be URL-escaped.
   * @param reportingWindow The time window used to calculate summary metrics.
   * @param projectNames List of project names.
   * @returns any summary metrics with trends for an entire org and it's projects.
   * @throws ApiError
   */
  public static getOrgSummaryData(
    orgSlug: string,
    reportingWindow?: "last-7-days" | "last-90-days" | "last-24-hours" | "last-30-days" | "last-60-days",
    projectNames?: any
  ): CancelablePromise<{
    /**
     * Aggregated metrics for an org, with trends.
     */
    org_data: {
      /**
       * Metrics for a single org metrics.
       */
      metrics: {
        /**
         * The total number of runs.
         */
        total_runs: number;
        /**
         * Total duration, in seconds.
         */
        total_duration_secs: number;
        /**
         * The total credits consumed over the current timeseries interval.
         */
        total_credits_used: number;
        success_rate: number;
        /**
         * The average number of runs per day.
         */
        throughput: number;
      };
      /**
       * Trends for a single org.
       */
      trends: {
        /**
         * The trend value for total number of runs.
         */
        total_runs: number;
        /**
         * Trend value for total duration.
         */
        total_duration_secs: number;
        /**
         * The trend value for total credits consumed.
         */
        total_credits_used: number;
        /**
         * The trend value for the success rate.
         */
        success_rate: number;
        /**
         * Trend value for the average number of runs per day.
         */
        throughput: number;
      };
    };
    /**
     * Metrics for a single project, across all branches
     */
    org_project_data: Array<{
      /**
       * The name of the project.
       */
      project_name: string;
      /**
       * Metrics for a single project, across all branches.
       */
      metrics: {
        /**
         * The total credits consumed over the current timeseries interval.
         */
        total_credits_used: number;
        /**
         * Total duration, in seconds.
         */
        total_duration_secs: number;
        /**
         * The total number of runs.
         */
        total_runs: number;
        success_rate: number;
      };
      /**
       * Trends for a single project, across all branches.
       */
      trends: {
        /**
         * The trend value for total credits consumed.
         */
        total_credits_used: number;
        /**
         * Trend value for total duration.
         */
        total_duration_secs: number;
        /**
         * The trend value for total number of runs.
         */
        total_runs: number;
        /**
         * The trend value for the success rate.
         */
        success_rate: number;
      };
    }>;
    /**
     * A list of all the project names in the organization.
     */
    all_projects: Array<string>;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/insights/{org-slug}/summary",
      path: {
        "org-slug": orgSlug,
      },
      query: {
        "reporting-window": reportingWindow,
        "project-names": projectNames,
      },
    });
  }

  /**
   * Get all branches for a project
   * Get a list of all branches for a specified project. The list will only contain branches currently available within Insights. The maximum number of branches returned by this endpoint is 5,000.
   * @param projectSlug Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
   * @param workflowName The name of a workflow. If not passed we will scope the API call to the project.
   * @returns any A list of branches for a project
   * @throws ApiError
   */
  public static getAllInsightsBranches(projectSlug: string, workflowName?: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/insights/{project-slug}/branches",
      path: {
        "project-slug": projectSlug,
      },
      query: {
        "workflow-name": workflowName,
      },
    });
  }

  /**
   * Get flaky tests for a project
   * Get a list of flaky tests for a given project. Flaky tests are branch agnostic.
   * A flaky test is a test that passed and failed in the same commit.
   * @param projectSlug Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
   * @returns any A list of flaky tests for a project
   * @throws ApiError
   */
  public static getFlakyTests(projectSlug: string): CancelablePromise<{
    /**
     * A list of all instances of flakes. Note that a test is no longer considered flaky after 2 weeks have passed without a flake. Each flake resets this timer.
     */
    "flaky-tests": Array<{
      "time-wasted"?: number;
      /**
       * The date and time when workflow was created.
       */
      "workflow-created-at": any;
      /**
       * The ID of the workflow associated with the provided test counts
       */
      "workflow-id": any;
      /**
       * The class the test belongs to.
       */
      classname: string;
      /**
       * The number of the pipeline.
       */
      "pipeline-number": number;
      /**
       * The name of the workflow.
       */
      "workflow-name": string;
      /**
       * The name of the test.
       */
      "test-name": string;
      /**
       * The name of the job.
       */
      "job-name": string;
      /**
       * The number of the job.
       */
      "job-number": number;
      /**
       * The number of times the test flaked.
       */
      "times-flaked": number;
      /**
       * The source of the test.
       */
      source: string;
      /**
       * The file the test belongs to.
       */
      file: string;
    }>;
    /**
     * A count of unique tests that have failed. If your project has N tests that have flaked multiple times each, this will be equal to N.
     */
    "total-flaky-tests": number;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/insights/{project-slug}/flaky-tests",
      path: {
        "project-slug": projectSlug,
      },
    });
  }

  /**
   * Get summary metrics for a project's workflows
   * Get summary metrics for a project's workflows. Workflow runs going back at most 90 days are included in the aggregation window. Metrics are refreshed daily, and thus may not include executions from the last 24 hours. Please note that Insights is not a real time financial reporting tool and should not be used for credit reporting. The most up to date credit information can be found in Plan Overview in the CircleCI UI.
   * @param projectSlug Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
   * @param pageToken A token to retrieve the next page of results.
   * @param allBranches Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.
   * @param branch The name of a vcs branch. If not passed we will scope the API call to the default branch.
   * @param reportingWindow The time window used to calculate summary metrics.
   * @returns any A paginated list of summary metrics by workflow
   * @throws ApiError
   */
  public static getProjectWorkflowMetrics(
    projectSlug: string,
    pageToken?: string,
    allBranches?: boolean,
    branch?: string,
    reportingWindow?: "last-7-days" | "last-90-days" | "last-24-hours" | "last-30-days" | "last-60-days"
  ): CancelablePromise<{
    /**
     * Workflow summary metrics.
     */
    items: Array<{
      /**
       * The name of the workflow.
       */
      name: string;
      /**
       * The start of the aggregation window for workflow metrics.
       */
      window_start: string;
      /**
       * The end of the aggregation window for workflow metrics.
       */
      window_end: string;
      /**
       * Metrics relating to a workflow's runs.
       */
      metrics: {
        /**
         * The total number of runs.
         */
        total_runs: number;
        /**
         * The number of successful runs.
         */
        successful_runs: number;
        /**
         * The mean time to recovery (mean time between failures and their next success) in seconds.
         */
        mttr: number;
        /**
         * The total credits consumed by the workflow in the aggregation window. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.
         */
        total_credits_used: number;
        /**
         * The number of failed runs.
         */
        failed_runs: number;
        success_rate: number;
        /**
         * Metrics relating to the duration of runs for a workflow.
         */
        duration_metrics: {
          /**
           * The minimum duration, in seconds, among a group of runs.
           */
          min: number;
          /**
           * The mean duration, in seconds, among a group of runs.
           */
          mean: number;
          /**
           * The median duration, in seconds, among a group of runs.
           */
          median: number;
          /**
           * The 95th percentile duration, in seconds, among a group of runs.
           */
          p95: number;
          /**
           * The max duration, in seconds, among a group of runs.
           */
          max: number;
          /**
           * The standard deviation, in seconds, among a group of runs.
           */
          standard_deviation: number;
        };
        /**
         * The number of recovered workflow executions per day.
         */
        total_recoveries: number;
        /**
         * The average number of runs per day.
         */
        throughput: number;
      };
    }>;
    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     */
    next_page_token: string;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/insights/{project-slug}/workflows",
      path: {
        "project-slug": projectSlug,
      },
      query: {
        "page-token": pageToken,
        "all-branches": allBranches,
        branch: branch,
        "reporting-window": reportingWindow,
      },
    });
  }

  /**
   * Get recent runs of a workflow
   * Get recent runs of a workflow. Runs going back at most 90 days are returned. Please note that Insights is not a real time financial reporting tool and should not be used for credit reporting. The most up to date credit information can be found in Plan Overview in the CircleCI UI.
   * @param projectSlug Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
   * @param workflowName The name of the workflow.
   * @param allBranches Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.
   * @param branch The name of a vcs branch. If not passed we will scope the API call to the default branch.
   * @param pageToken A token to retrieve the next page of results.
   * @param startDate Include only executions that started at or after this date. This must be specified if an end-date is provided.
   * @param endDate Include only executions that started before this date. This date can be at most 90 days after the start-date.
   * @returns any A paginated list of recent workflow runs
   * @throws ApiError
   */
  public static getProjectWorkflowRuns(
    projectSlug: string,
    workflowName: string,
    allBranches?: boolean,
    branch?: string,
    pageToken?: string,
    startDate?: string,
    endDate?: string
  ): CancelablePromise<{
    /**
     * Recent workflow runs.
     */
    items: Array<{
      /**
       * The unique ID of the workflow.
       */
      id: string;
      /**
       * The VCS branch of a Workflow's trigger.
       */
      branch: string;
      /**
       * The duration in seconds of a run.
       */
      duration: number;
      /**
       * The date and time the workflow was created.
       */
      created_at: string;
      /**
       * The date and time the workflow stopped.
       */
      stopped_at: string;
      /**
       * The number of credits used during execution. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.
       */
      credits_used: number;
      /**
       * Workflow status.
       */
      status: "success" | "failed" | "error" | "canceled" | "unauthorized";
    }>;
    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     */
    next_page_token: string;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/insights/{project-slug}/workflows/{workflow-name}",
      path: {
        "project-slug": projectSlug,
        "workflow-name": workflowName,
      },
      query: {
        "all-branches": allBranches,
        branch: branch,
        "page-token": pageToken,
        "start-date": startDate,
        "end-date": endDate,
      },
    });
  }

  /**
   * Get summary metrics for a project workflow's jobs.
   * Get summary metrics for a project workflow's jobs. Job runs going back at most 90 days are included in the aggregation window. Metrics are refreshed daily, and thus may not include executions from the last 24 hours. Please note that Insights is not a real time financial reporting tool and should not be used for credit reporting. The most up to date credit information can be found in Plan Overview in the CircleCI UI.
   * @param projectSlug Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
   * @param workflowName The name of the workflow.
   * @param pageToken A token to retrieve the next page of results.
   * @param allBranches Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.
   * @param branch The name of a vcs branch. If not passed we will scope the API call to the default branch.
   * @param reportingWindow The time window used to calculate summary metrics.
   * @returns any A paginated list of summary metrics by workflow job.
   * @throws ApiError
   */
  public static getProjectWorkflowJobMetrics(
    projectSlug: string,
    workflowName: string,
    pageToken?: string,
    allBranches?: boolean,
    branch?: string,
    reportingWindow?: "last-7-days" | "last-90-days" | "last-24-hours" | "last-30-days" | "last-60-days"
  ): CancelablePromise<{
    /**
     * Job summary metrics.
     */
    items: Array<{
      /**
       * The name of the job.
       */
      name: string;
      /**
       * The start of the aggregation window for job metrics.
       */
      window_start: string;
      /**
       * The end of the aggregation window for job metrics.
       */
      window_end: string;
      /**
       * Metrics relating to a workflow job's runs.
       */
      metrics: {
        success_rate: number;
        /**
         * The total number of runs.
         */
        total_runs: number;
        /**
         * The number of failed runs.
         */
        failed_runs: number;
        /**
         * The number of successful runs.
         */
        successful_runs: number;
        /**
         * The average number of runs per day.
         */
        throughput: number;
        /**
         * The total credits consumed by the job in the aggregation window. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.
         */
        total_credits_used: number;
        /**
         * Metrics relating to the duration of runs for a workflow job.
         */
        duration_metrics: {
          /**
           * The minimum duration, in seconds, among a group of runs.
           */
          min: number;
          /**
           * The mean duration, in seconds, among a group of runs.
           */
          mean: number;
          /**
           * The median duration, in seconds, among a group of runs.
           */
          median: number;
          /**
           * The 95th percentile duration, in seconds, among a group of runs.
           */
          p95: number;
          /**
           * The max duration, in seconds, among a group of runs.
           */
          max: number;
          /**
           * The standard deviation, in seconds, among a group of runs.
           */
          standard_deviation: number;
        };
      };
    }>;
    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     */
    next_page_token: string;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/insights/{project-slug}/workflows/{workflow-name}/jobs",
      path: {
        "project-slug": projectSlug,
        "workflow-name": workflowName,
      },
      query: {
        "page-token": pageToken,
        "all-branches": allBranches,
        branch: branch,
        "reporting-window": reportingWindow,
      },
    });
  }

  /**
   * Get metrics and trends for workflows
   * Get the metrics and trends for a particular workflow on a single branch or all branches
   * @param projectSlug Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
   * @param workflowName The name of the workflow.
   * @param allBranches Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.
   * @param branches The names of VCS branches to include in branch-level workflow metrics.
   * @returns any Metrics and trends for a workflow
   * @throws ApiError
   */
  public static getWorkflowSummary(
    projectSlug: string,
    workflowName: string,
    allBranches?: boolean,
    branches?: any
  ): CancelablePromise<{
    /**
     * Metrics aggregated across a workflow for a given time window.
     */
    metrics: {
      /**
       * The total number of runs.
       */
      total_runs: number;
      /**
       * The number of successful runs.
       */
      successful_runs: number;
      /**
       * The mean time to recovery (mean time between failures and their next success) in seconds.
       */
      mttr: number;
      /**
       * The total credits consumed by the workflow in the aggregation window. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.
       */
      total_credits_used: number;
      /**
       * The number of failed runs.
       */
      failed_runs: number;
      success_rate: number;
      /**
       * The start of the aggregation window for workflow metrics.
       */
      window_start: string;
      /**
       * Metrics relating to the duration of runs for a workflow.
       */
      duration_metrics: {
        /**
         * The minimum duration, in seconds, among a group of runs.
         */
        min: number;
        /**
         * The mean duration, in seconds, among a group of runs.
         */
        mean: number;
        /**
         * The median duration, in seconds, among a group of runs.
         */
        median: number;
        /**
         * The 95th percentile duration, in seconds, among a group of runs.
         */
        p95: number;
        /**
         * The max duration, in seconds, among a group of runs.
         */
        max: number;
        /**
         * The standard deviation, in seconds, among a group of runs.
         */
        standard_deviation: number;
      };
      /**
       * The end of the aggregation window for workflow metrics.
       */
      window_end: string;
      /**
       * The average number of runs per day.
       */
      throughput: number;
    };
    /**
     * Trends for aggregated metrics across a workflow for a given time window.
     */
    trends: {
      /**
       * The trend value for total number of runs.
       */
      total_runs: number;
      /**
       * The trend value for number of failed runs.
       */
      failed_runs: number;
      /**
       * The trend value for the success rate.
       */
      success_rate: number;
      /**
       * Trend value for the 95th percentile duration for a workflow for a given time window.
       */
      p95_duration_secs: number;
      /**
       * Trend value for the 50th percentile duration for a workflow for a given time window.
       */
      median_duration_secs: number;
      /**
       * The trend value for total credits consumed.
       */
      total_credits_used: number;
      /**
       * trend for mean time to recovery (mean time between failures and their next success).
       */
      mttr: number;
      /**
       * Trend value for the average number of runs per day.
       */
      throughput: number;
    };
    /**
     * A list of all the workflow names for a given project.
     */
    workflow_names: Array<string>;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/insights/{project-slug}/workflows/{workflow-name}/summary",
      path: {
        "project-slug": projectSlug,
        "workflow-name": workflowName,
      },
      query: {
        "all-branches": allBranches,
        branches: branches,
      },
    });
  }

  /**
   * Get test metrics for a project's workflows
   * Get test metrics for a project's workflows. Currently tests metrics are calculated based on 10 most recent workflow runs.
   * @param projectSlug Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
   * @param workflowName The name of the workflow.
   * @param branch The name of a vcs branch. If not passed we will scope the API call to the default branch.
   * @param allBranches Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.
   * @returns any A list of test metrics by workflow
   * @throws ApiError
   */
  public static getProjectWorkflowTestMetrics(
    projectSlug: string,
    workflowName: string,
    branch?: string,
    allBranches?: boolean
  ): CancelablePromise<{
    /**
     * The average number of tests executed per run
     */
    average_test_count: number;
    /**
     * Metrics for the most frequently failing tests
     */
    most_failed_tests: Array<{
      /**
       * The 95th percentile duration, in seconds, among a group of test runs.
       */
      p95_duration: number;
      /**
       * The total number of times the test was run.
       */
      total_runs: number;
      /**
       * The class the test belongs to.
       */
      classname: string;
      /**
       * The number of times the test failed
       */
      failed_runs: number;
      /**
       * Whether the test is flaky.
       */
      flaky: boolean;
      /**
       * The source of the test.
       */
      source: string;
      /**
       * The file the test belongs to.
       */
      file: string;
      /**
       * The name of the job.
       */
      job_name: string;
      /**
       * The name of the test.
       */
      test_name: string;
    }>;
    /**
     * The number of tests with the same success rate being omitted from most_failed_tests
     */
    most_failed_tests_extra: number;
    /**
     * Metrics for the slowest running tests
     */
    slowest_tests: Array<{
      /**
       * The 95th percentile duration, in seconds, among a group of test runs.
       */
      p95_duration: number;
      /**
       * The total number of times the test was run.
       */
      total_runs: number;
      /**
       * The class the test belongs to.
       */
      classname: string;
      /**
       * The number of times the test failed
       */
      failed_runs: number;
      /**
       * Whether the test is flaky.
       */
      flaky: boolean;
      /**
       * The source of the test.
       */
      source: string;
      /**
       * The file the test belongs to.
       */
      file: string;
      /**
       * The name of the job.
       */
      job_name: string;
      /**
       * The name of the test.
       */
      test_name: string;
    }>;
    /**
     * The number of tests with the same duration rate being omitted from slowest_tests
     */
    slowest_tests_extra: number;
    /**
     * The total number of test runs
     */
    total_test_runs: number;
    /**
     * Test counts grouped by pipeline number and workflow id
     */
    test_runs: Array<{
      /**
       * The number of the pipeline associated with the provided test counts
       */
      pipeline_number: number;
      /**
       * The ID of the workflow associated with the provided test counts
       */
      workflow_id: any;
      /**
       * The success rate calculated from test counts
       */
      success_rate: number;
      /**
       * Test counts for a given pipeline number
       */
      test_counts: {
        /**
         * The number of tests with the error status
         */
        error: number;
        /**
         * The number of tests with the failure status
         */
        failure: number;
        /**
         * The number of tests with the skipped status
         */
        skipped: number;
        /**
         * The number of tests with the success status
         */
        success: number;
        /**
         * The total number of tests
         */
        total: number;
      };
    }>;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/insights/{project-slug}/workflows/{workflow-name}/test-metrics",
      path: {
        "project-slug": projectSlug,
        "workflow-name": workflowName,
      },
      query: {
        branch: branch,
        "all-branches": allBranches,
      },
    });
  }
}
